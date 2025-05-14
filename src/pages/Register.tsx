import React, { useState } from 'react';
import {
    IonButton,
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonModal,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAlert,
    IonLoading,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';
import { AuthResponse, User } from '@supabase/supabase-js';

// Reusable Alert Component
const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenVerificationModal = () => {
        if (!email.endsWith("@nbsc.edu.ph")) {
            setAlertMessage("Only @nbsc.edu.ph emails are allowed to register.");
            setShowAlert(true);
            return;
        }

        if (password !== confirmPassword) {
            setAlertMessage("Passwords do not match.");
            setShowAlert(true);
            return;
        }

        setShowVerificationModal(true);
    };

    const doRegister = async () => {
        setShowVerificationModal(false);
        setIsLoading(true);
    
        try {
            // Check network connectivity
            if (!navigator.onLine) {
                throw new Error("No internet connection. Please check your network and try again.");
            }

            // Basic validation
            if (!email || !password || !username || !firstName || !lastName) {
                throw new Error("All fields are required.");
            }

            // Email validation
            if (!email.endsWith("@nbsc.edu.ph")) {
                throw new Error("Only @nbsc.edu.ph email addresses are allowed.");
            }
    
            // Sign up in Supabase authentication
            const { data: { user }, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: window.location.origin,
                    data: {
                        username,
                        first_name: firstName,
                        last_name: lastName
                    }
                }
            });

            if (signUpError) {
                console.error('Signup error:', signUpError);
                throw signUpError;
            }
            
            if (!user) {
                throw new Error("Failed to create user account.");
            }

            // Hash password before storing in the database
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            // Insert user data into 'users' table with UUID
            const { error: insertError } = await supabase
                .from("users")
                .insert({
                    username,
                    user_email: email,
                    user_firstname: firstName,
                    user_lastname: lastName,
                    user_password: hashedPassword,
                    auth_user_id: user.id
                });
    
            if (insertError) {
                console.error('Insert error:', insertError);
                // If user data insertion fails, clean up the auth user
                try {
                    await supabase.auth.admin.deleteUser(user.id);
                } catch (cleanupError) {
                    console.error('Failed to cleanup auth user:', cleanupError);
                }
                throw new Error("Failed to save user data. Please try again.");
            }
    
            setShowSuccessModal(true);
        } catch (err) {
            console.error('Registration error:', err);
            if (err instanceof Error) {
                const errorMessage = err.message.toLowerCase();
                if (errorMessage.includes('invalid api key')) {
                    setAlertMessage("Authentication error. Please check your configuration.");
                } else if (errorMessage.includes('failed to fetch') || 
                    errorMessage.includes('network error') ||
                    errorMessage.includes('name not resolved')) {
                    setAlertMessage("Unable to connect to the server. Please check your internet connection and try again.");
                } else if (errorMessage.includes('already registered')) {
                    setAlertMessage("This email is already registered. Please try logging in instead.");
                } else if (errorMessage.includes('invalid email')) {
                    setAlertMessage("Please enter a valid @nbsc.edu.ph email address.");
                } else {
                    setAlertMessage(err.message);
                }
            } else {
                setAlertMessage("An unexpected error occurred. Please try again later.");
            }
            setShowAlert(true);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <IonPage>
            <IonContent className='ion-padding'>
                <h1>Create your account</h1>

                <IonInput label="Username" labelPlacement="stacked" fill="outline" type="text" placeholder="Enter a unique username" value={username} onIonChange={e => setUsername(e.detail.value!)} style={{ marginTop: '15px' }} />
                <IonInput label="First Name" labelPlacement="stacked" fill="outline" type="text" placeholder="Enter your first name" value={firstName} onIonChange={e => setFirstName(e.detail.value!)} style={{ marginTop: '15px' }} />
                <IonInput label="Last Name" labelPlacement="stacked" fill="outline" type="text" placeholder="Enter your last name" value={lastName} onIonChange={e => setLastName(e.detail.value!)} style={{ marginTop: '15px' }} />
                <IonInput label="Email" labelPlacement="stacked" fill="outline" type="email" placeholder="youremail@nbsc.edu.ph" value={email} onIonChange={e => setEmail(e.detail.value!)} style={{ marginTop: '15px' }} />
                <IonInput label="Password" labelPlacement="stacked" fill="outline" type="password" placeholder="Enter password" value={password} onIonChange={e => setPassword(e.detail.value!)} style={{ marginTop: '15px' }} >
                    <IonInputPasswordToggle slot="end" />
                </IonInput>
                <IonInput label="Confirm Password" labelPlacement="stacked" fill="outline" type="password" placeholder="Confirm password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} style={{ marginTop: '15px' }} >
                    <IonInputPasswordToggle slot="end" />
                </IonInput>

                <IonButton onClick={handleOpenVerificationModal} expand="full" shape='round' style={{ marginTop: '15px' }}>
                    Register
                </IonButton>
                <IonButton routerLink="/it35-lab" expand="full" fill="clear" shape='round'>
                    Already have an account? Sign in
                </IonButton>

                {/* Verification Modal */}
                <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                    <IonContent className="ion-padding">
                        <IonCard className="ion-padding" style={{ marginTop: '25%' }}>
                            <IonCardHeader>
                                <IonCardTitle>User Registration Details</IonCardTitle>
                                <hr />
                                <IonCardSubtitle>Username</IonCardSubtitle>
                                <IonCardTitle>{username}</IonCardTitle>

                                <IonCardSubtitle>Email</IonCardSubtitle>
                                <IonCardTitle>{email}</IonCardTitle>

                                <IonCardSubtitle>Name</IonCardSubtitle>
                                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '5px' }}>
                                <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                                <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
                            </div>
                        </IonCard>
                    </IonContent>
                </IonModal>

                {/* Success Modal */}
                <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
                    <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', marginTop: '35%' }}>
                        <IonTitle style={{ marginTop: '35%' }}>Registration Successful 🎉</IonTitle>
                        <IonText>
                            <p>Your account has been created successfully.</p>
                            <p>Please check your email address.</p>
                        </IonText>
                        <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
                            Go to Login
                        </IonButton>
                    </IonContent>
                </IonModal>

                {/* Reusable AlertBox Component */}
                <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

                {/* Add Loading Overlay */}
                <IonLoading
                    isOpen={isLoading}
                    message="Creating your account..."
                    spinner="crescent"
                />

            </IonContent>
        </IonPage>
    );
};

export default Register;
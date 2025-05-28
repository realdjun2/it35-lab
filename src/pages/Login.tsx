import { 
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { SetStateAction, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import ReCAPTCHA from 'react-google-recaptcha';

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

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // OTP state
  const [step, setStep] = useState<'login' | 'otp'>('login');
  const [otp, setOtp] = useState('');

  const siteKey = '6Lc45kkrAAAAAJXzcs1C75m1E8xrmzzNRjwfpy0T'; // <-- Your real site key

  // 1. Login step: check credentials, then request OTP
  const doLogin = async () => {
    if (!recaptchaToken) {
      setAlertMessage("Please complete the reCAPTCHA.");
      setShowAlert(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    // Call your Supabase function to generate/send OTP
    const { error: otpError } = await supabase.rpc('generate_and_send_otp', { email_input: email });
    if (otpError) {
      setAlertMessage(otpError.message);
      setShowAlert(true);
      return;
    }

    setStep('otp');
    setAlertMessage('OTP sent to your email.');
    setShowAlert(true);
  };

  // 2. OTP step: verify OTP
  const verifyOtp = async () => {
    const { data, error } = await supabase.rpc('verify_otp', { email_input: email, otp_input: otp });
    if (error || !data?.success) {
      setAlertMessage(error?.message || 'Invalid OTP');
      setShowAlert(true);
      return;
    }
    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className='ion-padding'>
        {step === 'login' ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25%'
          }}>
            <h1 style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>USER LOGIN</h1>

            <IonInput
              label="Email" 
              labelPlacement="floating" 
              fill="outline"
              type="email"
              placeholder="Enter Email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
            />
            
            <IonInput style={{ marginTop: '10px' }}      
              fill="outline"
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            >
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>

            {/* Google reCAPTCHA */}
            <div style={{ marginTop: '15px' }}>
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(token: SetStateAction<string | null>) => setRecaptchaToken(token)}
              />
            </div>

            <IonButton onClick={doLogin} expand="full" shape='round'>
              Login
            </IonButton>

            <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape='round'>
              Don't have an account? Register here
            </IonButton>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '25%'
          }}>
            <h2>Enter OTP</h2>
            <IonInput
              label="OTP"
              labelPlacement="floating"
              fill="outline"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onIonChange={e => setOtp(e.detail.value!)}
            />
            <IonButton onClick={verifyOtp} expand="full" shape='round' style={{ marginTop: '10px' }}>
              Verify OTP
            </IonButton>
            <IonButton onClick={doLogin} expand="full" fill="clear" shape='round' style={{ marginTop: '10px' }}>
              Resend OTP
            </IonButton>
          </div>
        )}

        {/* Alert */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        {/* Success Toast */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
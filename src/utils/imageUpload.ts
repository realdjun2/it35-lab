import { supabase, STORAGE_BUCKET } from './supabaseClient';

export const uploadImageToSupabase = async (
    file: File,
    folder: string = 'foods'
): Promise<string | null> => {
    try {
        // Create a unique file name
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        // Upload the file to Supabase storage
        const { error: uploadError } = await supabase.storage
            .from(STORAGE_BUCKET)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (uploadError) {
            throw uploadError;
        }

        // Get the public URL of the uploaded file
        const { data } = supabase.storage
            .from(STORAGE_BUCKET)
            .getPublicUrl(filePath);

        return data.publicUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;
    }
}; 
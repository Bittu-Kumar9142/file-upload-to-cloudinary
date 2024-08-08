import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: 'dadh76olr', 
    api_key: '889728294655133', 
    api_secret: 'gtohufHxe9W_PabRZk-2Jx20Ww8' // Click 'View Credentials' below to copy your API secret
});

export const uploadToCloudinary = async(file)=>{
    try {
        const x =  await cloudinary.uploader.upload(file)

         fs.unlink(file,
            (err => {
                if (err) console.log(err);
                else {
                    console.log("\nDeleted file: example_file.txt");
                }
            }));
            return x
    } catch (error) {
       console.log(error) 
    }
}


import { ConsoleLogger } from '@nestjs/common';
import * as bycrpt from 'bcrypt';


export async function hashPassword(password: string){
    console.log('password', password);
    const salt = await bycrpt.genSalt(100);
    return await bycrpt.hash(password, salt);


}

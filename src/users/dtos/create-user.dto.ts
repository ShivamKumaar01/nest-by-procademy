import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNumber()
    id:number;
    @IsString()
    @IsNotEmpty()
    @MinLength(3,{message:"name must be min of length 3"})
    name:string;
    @IsNumber()
    age:number

    @IsString()
    gender:string;
    @IsBoolean()
    isMarried:boolean;
}
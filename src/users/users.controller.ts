import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
@Get()
getUsers(){
    const UserService=new UsersService();
    return UserService.getAllUsers();
}
@Get(':id/:name/:gender?')
getUserById(){

}


@Post()
createUser(){
    const user={id:3,name:'marry',age:26,gender:'female',isMarried:true}
    const UserService=new UsersService();
    return UserService.createUser(user);
    return 'a new user is created'
}
}
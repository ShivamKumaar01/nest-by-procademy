import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
@Get()
getUsers(@Query() query:any){
    const UserService=new UsersService();
    console.log(query);
    return UserService.getAllUsers();
}
@Get(':id/')
getUserById(@Param('id') id:any){
    // console.log(param)
    const UserService=new UsersService();
    return UserService.getUserById(+id)

}


@Post()
createUser(){
    const user={id:3,name:'marry',age:26,gender:'female',isMarried:true}
    const UserService=new UsersService();
    return UserService.createUser(user);
    return 'a new user is created'
}
}
// import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
// import { UsersService } from "./users.service";
// // import { CreateUserDto } from "./dtos/create-user.dto";

// @Controller('users')
// export class UsersController {
//     constructor(
//         usersService : UsersService
//     ) {}
//     @Get()
//     getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
//         @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
//         const UserService = new UsersService();
//         console.log(limit, page)

//         return UserService.getAllUsers();


//     }
//     // getUsers(@Query() query:any){
//     //     const UserService=new UsersService();
//     //     // console.log(query);
//     //     if(query.gender){
//     //         return UserService.getAllUsers().filter(u=>u.gender===query.gender)
//     //     }
//     //     else{
//     //         return UserService.getAllUsers();
//     //     }

//     // }
//     @Get(':id/')
//     getUserById(@Param('id', ParseIntPipe) id: any) {
//         // console.log(param)
//         const UserService = new UsersService();
//         // console.log(typeof(id))
//         return UserService.getUserById(id)

//     }


//     @Post()
//     createUser(@Body(new ValidationPipe()) user: any) {
//         // const user={id:3,name:'marry',email:'marry@gmail.com',age:26,gender:'female',isMarried:true}
//         // const UserService=new UsersService();
//         // this.usersService.createUser(user);
//         return 'a new user is created successfully'
//     }
// }

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} 

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    // @Param() param:GetUserParamDto
  ) {
    console.log(limit, page);
    return this.usersService.getAllUsers(); 
  }
  //  @Get()
  // getUsers(
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // ) {
  //   console.log(limit, page);
  //   return this.usersService.getAllUsers(); 
  // }

  @Get(':id/')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id); 
  }

  @Post()
  // commmented line is for validation pipe in a particular request
  //  createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
  //  console.log(user)
  // typeof user is object and user is not a instance of CreateUserDto
  //   this.usersService.createUser(user); 
  //   return 'A new user is created successfully';
  // }
  createUser(@Body() user: CreateUserDto) {
    console.log(user instanceof CreateUserDto)
    // this.usersService.createUser(user); 
    return 'A new user is created successfully';
  }
}

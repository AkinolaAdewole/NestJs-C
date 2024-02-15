import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    //Get all
    @Get()
    getNinjas(){
        return [];
    };

    // Get one by id
    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return {message:' Get one successfully'};
    };

    //POST
    @Post()
    createNinja(){
        return { message:' post successfully '}
    };

    //PUT  /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id:any){
        return { message: 'update successfully'}
    };

    //Delete /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id:any){
        return { message: 'delete successfully '}
    }
}

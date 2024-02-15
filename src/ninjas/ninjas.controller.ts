import { Controller, Get, Param, Post } from '@nestjs/common';

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
        return {};
    };

    //POST
    @Post()
    createNinja(){
        return { message:' post successfully '}
    }
}

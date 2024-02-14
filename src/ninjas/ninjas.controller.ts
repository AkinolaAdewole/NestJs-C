import { Controller } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    //Get all
    @Get()
    getNinjas(){
        return [];
    };

    // Get one by id
    @Get(':id');
    getOneNinja(){
        return{}
    }
}

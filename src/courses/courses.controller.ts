import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto} from './create-course.dto'

@Controller('courses')
export class CoursesController {
    constructor(private coursesServices: CoursesService){}

    @Get()
    async getCourses() {
        const courses = await this.coursesServices.getCourses();
        return courses;
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId) {
        const course = await this.coursesServices.getCourse(courseId);
        return course;
    }

    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto){
        const course = await this.coursesServices.addCourse(createCourseDto);
        return course;
    }

    @Delete()
    async deleteCourse(@Query() query) {
        const courses = await this.coursesServices.deleteCourse(query.courseId);
        return courses;
    }
}

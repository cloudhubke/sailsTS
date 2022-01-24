interface Student {
    StudentName: string;
    StudentId: number;
}

const st: Student = {

};

function addStudent(params: Student) {
    console.log(params.StudentName);
    console.log(params.StudentId);

    return params;
}

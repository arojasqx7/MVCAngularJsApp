using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSCourse.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public int DepartmentId { get; set; }
    }
}
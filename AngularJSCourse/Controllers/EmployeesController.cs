using AngularJSCourse.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSCourse.Controllers
{
    public class EmployeesController : Controller
    {
        AngularContext db = new AngularContext();

        // GET: Employees
        public ActionResult Index()
        {
            var emps = db.Employees.ToList();
            return Json(emps, JsonRequestBehavior.AllowGet);
        }
    }
}
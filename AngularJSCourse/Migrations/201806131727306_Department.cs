namespace AngularJSCourse.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Department : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Department",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DepartmentName = c.String(),
                        BuildingName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Department");
        }
    }
}

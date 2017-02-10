using System.Web;
using System.Web.Optimization;

namespace AngularCalc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-ui").Include(
                      "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                      "~/Scripts/angular-ui/ui-bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/operations").Include(
                "~/Scripts/app/model/operations/Operation.js",
                "~/Scripts/app/model/operations/BinaryOperation.js",
                "~/Scripts/app/model/operations/UnaryOperation.js",
                "~/Scripts/app/model/operations/AddOperation.js",
                "~/Scripts/app/model/operations/ChangeSignOperation.js",
                "~/Scripts/app/model/operations/ClearOperation.js",
                "~/Scripts/app/model/operations/DivideOperation.js",
                "~/Scripts/app/model/operations/MultiplyOperation.js",
                "~/Scripts/app/model/operations/NoOperation.js",
                "~/Scripts/app/model/operations/PercentageOperation.js",
                "~/Scripts/app/model/operations/SqrtOperation.js",
                "~/Scripts/app/model/operations/SubtractOperation.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/states").Include(
                "~/Scripts/app/model/states/StateParams.js",
                "~/Scripts/app/model/states/State.js",
                "~/Scripts/app/model/states/InsertOperandState.js",
                "~/Scripts/app/model/states/ShowResultState.js",
                "~/Scripts/app/model/states/WaitForSecondOperandState.js",
                "~/Scripts/app/model/states/StateResolver.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/app/model/Calculator.js",
                "~/Scripts/app/app.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/ui-bootstrap-csp.css",
                      "~/Content/bootstrap.css",
                      "~/Content/Views/Home/Index.css"));
        }
    }
}

const topmost = require("ui/frame").topmost;

const CarsListViewModel = require("./cars-list-view-model");

/* ***********************************************************
* This is the master list code behind in the master-detail structure.
* This code behind gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
*************************************************************/
const viewModel = new CarsListViewModel();

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
* Call any view model data initialization load here.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;

    page.bindingContext = viewModel;
    viewModel.load();
}

/* ***********************************************************
* Use the "itemTap" event handler of the <RadListView> to navigate to the
* item details page. Retrieve a reference for the data item (the id) and pass it
* to the item details page, so that it can identify which data item to display.
* Learn more about navigating with a parameter in this documentation article:
* http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
*************************************************************/
function onCarItemTap(args) {
    const tappedCarItem = args.view.bindingContext;

    topmost().navigate({
        moduleName: "cars/car-detail-page/car-detail-page",
        context: tappedCarItem
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onCarItemTap = onCarItemTap;

/**
 * Created by dylan on 15/10/10.
 */

var panel =
{
    //The element that will be loaded with notes
    element: null
};

panel.initialize=function(e)
{
    console.log("Initializing the panel with:")
    console.log(e);
    panel.element = e;
    
};

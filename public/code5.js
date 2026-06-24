gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.idToCallbackMap = new Map();
gdjs.winCode.GDNewPanelSpriteObjects1= [];
gdjs.winCode.GDNewPanelSpriteObjects2= [];
gdjs.winCode.GDHomeObjects1= [];
gdjs.winCode.GDHomeObjects2= [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDNewText2Objects1= [];
gdjs.winCode.GDNewText2Objects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "3秒");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "3秒") >= 3;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "3秒") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "A", null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.winCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDHomeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDHomeObjects1[k] = gdjs.winCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.winCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.winCode.GDHomeObjects1.length = 0;
gdjs.winCode.GDHomeObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.winCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.winCode.GDHomeObjects1.length = 0;
gdjs.winCode.GDHomeObjects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;

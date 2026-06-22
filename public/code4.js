gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.idToCallbackMap = new Map();
gdjs.gameoverCode.GDagainObjects1= [];
gdjs.gameoverCode.GDagainObjects2= [];
gdjs.gameoverCode.GDleaveObjects1= [];
gdjs.gameoverCode.GDleaveObjects2= [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Left", null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game01", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__IsButtonJustPressed.func(runtimeScene, 1, "Right", null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("again"), gdjs.gameoverCode.GDagainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDagainObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDagainObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDagainObjects1[k] = gdjs.gameoverCode.GDagainObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDagainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game01", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leave"), gdjs.gameoverCode.GDleaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDleaveObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDleaveObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDleaveObjects1[k] = gdjs.gameoverCode.GDleaveObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDleaveObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "start", false);
}
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDagainObjects1.length = 0;
gdjs.gameoverCode.GDagainObjects2.length = 0;
gdjs.gameoverCode.GDleaveObjects1.length = 0;
gdjs.gameoverCode.GDleaveObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDagainObjects1.length = 0;
gdjs.gameoverCode.GDagainObjects2.length = 0;
gdjs.gameoverCode.GDleaveObjects1.length = 0;
gdjs.gameoverCode.GDleaveObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;

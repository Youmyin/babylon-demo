/* eslint-disable */
import React, { useRef } from 'react';
import './App.css';
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, Scene, Engine } from '@babylonjs/core';
import "@babylonjs/loaders/glTF";
import { Nullable } from '@babylonjs/core/types';
import SceneComponent from './components/SceneComponent';
/* eslint-disable */

// import model from "./assets/model2/scene.gltf";

const App: React.FC = () => {
  let model:any

  const onSceneReady = (scene: any) => {
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    const canvas = scene.getEngine().getRenderingCanvas();

    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // box = MeshBuilder.CreateBox("box", {}, scene);
    // console.log(scene)
    model = SceneLoader.Append("./assets/model2/", "scene.gltf", scene, function (scene) {
      console.log(scene)
    });
    //   SceneLoader.ImportMeshAsync(
    //     "",
    //     "",
    //     model,
    //     scene,
    //     undefined,
    //     ".gltf"
    // );
  };

  const onRender = (scene: any) => {
    if (model !== undefined) {
      // console.log("hhh")
    }
  };

  return (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    </div>
  );
}

export default App;

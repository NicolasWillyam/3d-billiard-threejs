import { useEffect } from 'react';


import * as THREE from 'three';

import SceneInit from './../lib/SceneInit';

const SI = 1; //inch
const SCALE = 4;
const PI = 6.283185307179586 / 2;
const DEPTH = (2 + 1/2) / 2 / SCALE;
const RAIL_TABLE = 5*  SI / SCALE;
const CUSHION = 2 *  SI / SCALE;

const TABLE_TOP = {
  W: 100*SI / SCALE ,
  H: 50*SI / SCALE,
}



const CORNER_POCKET = {
  CORNER: 4*SI / SCALE,
  HALF:  3*SI / SCALE,
  
}

export default function Cushion() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();
   const cushionTableGeometry = new THREE.BoxGeometry( TABLE_TOP.W, DEPTH, CUSHION);
  const cushionTableMaterial = new THREE.MeshBasicMaterial( {color: "blue", side: THREE.DoubleSide} );
  const cushionTable = new THREE.Mesh( cushionTableGeometry, cushionTableMaterial );
   cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 );
  test.scene.add( cushionTable );
  }, []);

 
}


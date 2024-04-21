import { useEffect } from 'react';


import * as THREE from 'three';

import SceneInit from './lib/SceneInit';

const SI = 1; //inch
const SCALE = 4;
const PI = 6.283185307179586 / 2;
const DEPTH = (2 + 1/2) / 2 / SCALE;
const RAIL_TABLE = 5*  SI / SCALE;
const CUSHION = 2 *  SI / SCALE;
const CUE_BALL = (2 + 1/4) / 2 / SCALE;
const HEIGH = 10*  SI / SCALE;
const G = 0.2 *  SI / SCALE;
const SPACE = 142 *  SI / SCALE;

const TABLE_TOP = {
  W: 100*SI / SCALE ,
  H: 50*SI / SCALE,
}

const ROOM = {
  W: TABLE_TOP.W + SPACE,
  H: TABLE_TOP.H + SPACE,
}


const TABLE_LEG = {
  T: 8*SI / SCALE,
  B: 6*SI / SCALE,
  H: 24*SI / SCALE,
}



const CORNER_POCKET = {
  CORNER: 4*SI / SCALE,
  HALF:  3*SI / SCALE,
  
}

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();


   const tableTexture = new THREE.TextureLoader().load('./assets/textures/pooltable_material.png');
   const railTexture = new THREE.TextureLoader().load('./assets/textures/rail_material.png');
   const railshortTexture = new THREE.TextureLoader().load('./assets/textures/rail_material_short.png');
   const cushionTexture = new THREE.TextureLoader().load('./assets/textures/cushion_material.png');
   const cornerTexture = new THREE.TextureLoader().load('./assets/textures/corner_material.png');
   const tableSideTexture = new THREE.TextureLoader().load('./assets/textures/tablesidelong_material.png');
   const tableSideTexture2 = new THREE.TextureLoader().load('./assets/textures/tablesideshort_material.png');
   const cueBallTexture = new THREE.TextureLoader().load('./assets/textures/0.png');
   const objectBallTexture = new THREE.TextureLoader().load('./assets/textures/9_basecolor.png');


// const centerGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 10, 64, 64, false,  2 * PI, 2 * PI); 
  // const centerMaterial = new THREE.MeshBasicMaterial( {color: "red"} ); 
  // const center = new THREE.Mesh( centerGeometry, centerMaterial ); 
  // center.position.set(0,0,0)
  // test.scene.add( center );

  const tableTopGeometry = new THREE.BoxGeometry( TABLE_TOP.W + 2*CUSHION, 0.01, TABLE_TOP.H  + 2*CUSHION);
  const tableTopMaterial = new THREE.MeshBasicMaterial( {map:tableTexture,} );
  const tableTop = new THREE.Mesh( tableTopGeometry, tableTopMaterial );
   tableTop.position.set(0,0,0)
  test.scene.add( tableTop );

  const cornerGeometry = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER, DEPTH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerMaterial = new THREE.MeshBasicMaterial( {map: cornerTexture,} ); 
  const corner = new THREE.Mesh( cornerGeometry, cornerMaterial ); 
  corner.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF,DEPTH/2,TABLE_TOP.H / 2 + + CORNER_POCKET.HALF)

  test.scene.add( corner );



  
  const cornerGeometry2 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER, DEPTH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const corner2 = new THREE.Mesh( cornerGeometry2, cornerMaterial ); 
  corner2.rotation.y = -Math.PI/2;
  corner2.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF,DEPTH/2,TABLE_TOP.H / 2 + + CORNER_POCKET.HALF)
  test.scene.add( corner2 );

  const cornerGeometry3 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER, DEPTH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const corner3 = new THREE.Mesh( cornerGeometry3, cornerMaterial ); 
  corner3.rotation.y = Math.PI/2;
  corner3.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF)
  test.scene.add( corner3 );

  const cornerGeometry4 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER, DEPTH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const corner4 = new THREE.Mesh( cornerGeometry4, cornerMaterial ); 
  corner4.rotation.y = -Math.PI;
  corner4.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF)
  test.scene.add( corner4 );

  const halfCornerGeometry3 = new THREE.BoxGeometry( CORNER_POCKET.HALF + CORNER_POCKET.CORNER , DEPTH,CORNER_POCKET.HALF); 
  const halfCorner3 = new THREE.Mesh( halfCornerGeometry3, cornerMaterial ); 
  halfCorner3.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/2 - CORNER_POCKET.CORNER/2 ,DEPTH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/2)
  test.scene.add( halfCorner3);

  const halfCornerGeometry4 = new THREE.BoxGeometry( CORNER_POCKET.HALF  , DEPTH,CORNER_POCKET.HALF + + CORNER_POCKET.CORNER); 
  const halfCorner4 = new THREE.Mesh( halfCornerGeometry4, cornerMaterial ); 
  halfCorner4.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/2  ,DEPTH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/2 + + CORNER_POCKET.CORNER/2)
  test.scene.add( halfCorner4);

   const halfCornerGeometry5 = new THREE.BoxGeometry( CORNER_POCKET.HALF  , DEPTH,CORNER_POCKET.HALF + + CORNER_POCKET.CORNER); 
  const halfCorner5 = new THREE.Mesh( halfCornerGeometry5, cornerMaterial ); 
  halfCorner5.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/2  ,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/2 - CORNER_POCKET.CORNER/2)
  test.scene.add( halfCorner5);

   const halfCornerGeometry6 = new THREE.BoxGeometry( CORNER_POCKET.HALF  + CORNER_POCKET.CORNER, DEPTH,CORNER_POCKET.HALF); 
  const halfCorner6 = new THREE.Mesh( halfCornerGeometry6, cornerMaterial ); 
  halfCorner6.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/2 + CORNER_POCKET.CORNER/2 ,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/2)
  test.scene.add( halfCorner6);

  const halfCornerGeometry7 = new THREE.BoxGeometry( CORNER_POCKET.HALF  , DEPTH,CORNER_POCKET.HALF + + CORNER_POCKET.CORNER); 
  const halfCorner7 = new THREE.Mesh( halfCornerGeometry7, cornerMaterial ); 
  halfCorner7.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/2  ,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/2 - CORNER_POCKET.CORNER/2)
  test.scene.add( halfCorner7);

   const halfCornerGeometry8 = new THREE.BoxGeometry( CORNER_POCKET.HALF  + CORNER_POCKET.CORNER, DEPTH,CORNER_POCKET.HALF); 
  const halfCorner8 = new THREE.Mesh( halfCornerGeometry8, cornerMaterial ); 
  halfCorner8.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/2 - CORNER_POCKET.CORNER/2 ,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/2)
  test.scene.add( halfCorner8);

  const halfCornerGeometry = new THREE.BoxGeometry( CORNER_POCKET.HALF + CORNER_POCKET.CORNER , DEPTH,CORNER_POCKET.HALF); 
  const halfCorner = new THREE.Mesh( halfCornerGeometry, cornerMaterial ); 
  halfCorner.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/2 + CORNER_POCKET.CORNER/2 ,DEPTH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/2)
  test.scene.add( halfCorner);


   const middleCornerGeometry = new THREE.BoxGeometry( RAIL_TABLE + 2*G, DEPTH,RAIL_TABLE ); 
  const middleCorner = new THREE.Mesh( middleCornerGeometry, cornerMaterial ); 
  middleCorner.position.set(0,DEPTH/2 + 0.01,TABLE_TOP.H / 2 + RAIL_TABLE -2*G)
  test.scene.add( middleCorner);

   const middleCornerGeometry2 = new THREE.BoxGeometry( RAIL_TABLE + 2*G, DEPTH,RAIL_TABLE ); 
  const middleCorner2 = new THREE.Mesh( middleCornerGeometry2, cornerMaterial ); 
  middleCorner2.position.set(0,DEPTH/2 + 0.01,-(TABLE_TOP.H / 2 + RAIL_TABLE -2*G))
  test.scene.add( middleCorner2);

  const halfCornerGeometry2 = new THREE.BoxGeometry( CORNER_POCKET.HALF  , DEPTH,CORNER_POCKET.HALF + + CORNER_POCKET.CORNER); 
  const halfCorner2 = new THREE.Mesh( halfCornerGeometry2, cornerMaterial ); 
  halfCorner2.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/2  ,DEPTH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/2 + + CORNER_POCKET.CORNER/2)
  test.scene.add( halfCorner2);

  const cornerHoleGeometry = new THREE.CylinderGeometry( CORNER_POCKET.CORNER/2 + DEPTH/4, CORNER_POCKET.CORNER/2 + DEPTH/4, DEPTH * 1.1, 64, 64, false,  2 * PI, 2* PI); 
  const cornerHoleMaterial = new THREE.MeshBasicMaterial( {color: "black"} ); 
  const cornerHole = new THREE.Mesh( cornerHoleGeometry, cornerHoleMaterial ); 
  cornerHole.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/4,DEPTH/2 + 0.01,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/4)
  test.scene.add( cornerHole );

  const cornerHoleGeometry2 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER/2 + DEPTH/4, CORNER_POCKET.CORNER/2 + DEPTH/4, DEPTH * 1.1, 64, 64, false,  2 * PI, 2* PI); 

  const cornerHole2 = new THREE.Mesh( cornerHoleGeometry, cornerHoleMaterial ); 
  cornerHole2.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/4,DEPTH/2 + 0.01,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/4)
  test.scene.add( cornerHole2 );

  const cornerHole3 = new THREE.Mesh( cornerHoleGeometry, cornerHoleMaterial ); 
  cornerHole3.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF/4,DEPTH/2 + 0.01,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/4)
  test.scene.add( cornerHole3 );

  const cornerHole4 = new THREE.Mesh( cornerHoleGeometry, cornerHoleMaterial ); 
  cornerHole4.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF/4,DEPTH/2 + 0.01,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/4)
  test.scene.add( cornerHole4 );


  const cornerHoleCenterGeometry = new THREE.CylinderGeometry( CORNER_POCKET.HALF/2 + DEPTH/4, CORNER_POCKET.HALF/2 + DEPTH/4, DEPTH * 1.1, 64, 64, false,  2 * PI, 2* PI); 
  const cornerHoleCenter = new THREE.Mesh( cornerHoleCenterGeometry, cornerHoleMaterial ); 
  cornerHoleCenter.position.set(0,DEPTH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF/1.5)
  test.scene.add( cornerHoleCenter );

  const cornerHoleCenterGeometry2 = new THREE.CylinderGeometry( CORNER_POCKET.HALF/2 + DEPTH/4, CORNER_POCKET.HALF/2 + DEPTH/4, DEPTH * 1.1, 64, 64, false,  2 * PI, 2* PI); 
  const cornerHoleCenter2 = new THREE.Mesh( cornerHoleCenterGeometry, cornerHoleMaterial ); 
  cornerHoleCenter2.position.set(0,DEPTH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF/1.5)
  test.scene.add( cornerHoleCenter2 );

  const railTableGeometry = new THREE.BoxGeometry( TABLE_TOP.W, DEPTH, RAIL_TABLE);
  const railTableMaterial = new THREE.MeshBasicMaterial( {map:railTexture,} );
  const railShortMaterial = new THREE.MeshBasicMaterial( {map:railshortTexture,} );
  const railTable = new THREE.Mesh( railTableGeometry, railTableMaterial );
   railTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + RAIL_TABLE/2 + CUSHION)
  // test.scene.add( railTable );


  const railTableGeometry2 = new THREE.BoxGeometry( RAIL_TABLE, DEPTH, TABLE_TOP.H);
 
  const railTable2 = new THREE.Mesh( railTableGeometry2, railTableMaterial );
   railTable2.position.set(TABLE_TOP.W/2 + RAIL_TABLE/2 + CUSHION,DEPTH/2, 0)
  test.scene.add( railTable2 );


  const railTable2P1 = new THREE.Mesh( railTableGeometry2, railTableMaterial );
   railTable2P1.position.set(TABLE_TOP.W/4,DEPTH/2, -TABLE_TOP.H/2 - RAIL_TABLE/2 - CUSHION);
   railTable2P1.rotation.y = Math.PI/2;
  test.scene.add( railTable2P1 );

  const railTable2P2 = new THREE.Mesh( railTableGeometry2, railTableMaterial );
   railTable2P2.position.set(-TABLE_TOP.W/4,DEPTH/2, -TABLE_TOP.H/2 - RAIL_TABLE/2 - CUSHION);
   railTable2P2.rotation.y = Math.PI/2;
  test.scene.add( railTable2P2 );

   const railTableGeometry3 = new THREE.BoxGeometry( RAIL_TABLE, DEPTH, TABLE_TOP.H);
 
  const railTable3 = new THREE.Mesh( railTableGeometry3, railTableMaterial );
   railTable3.position.set(-TABLE_TOP.W/2 - RAIL_TABLE/2 - CUSHION,DEPTH/2, 0)
  test.scene.add( railTable3 );

   const railTable3P1 = new THREE.Mesh( railTableGeometry2, railTableMaterial );
   railTable3P1.position.set(TABLE_TOP.W/4,DEPTH/2, TABLE_TOP.H/2 + RAIL_TABLE/2 + CUSHION);
   railTable3P1.rotation.y = Math.PI/2;
  test.scene.add( railTable3P1 );

  const railTable3P2 = new THREE.Mesh( railTableGeometry2, railTableMaterial );
   railTable3P2.position.set(-TABLE_TOP.W/4,DEPTH/2, TABLE_TOP.H/2 + RAIL_TABLE/2 + CUSHION);
   railTable3P2.rotation.y = Math.PI/2;
  test.scene.add( railTable3P2 );


  //  const cushionTableGeometry = new THREE.BoxGeometry( TABLE_TOP.W, DEPTH, CUSHION);
  // const cushionTableMaterial = new THREE.MeshBasicMaterial( {map: cushionTexture,} );
  // const cushionTable = new THREE.Mesh( cushionTableGeometry, cushionTableMaterial );
  //  cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 )
  // test.scene.add( cushionTable );


const vertices = new Float32Array([
    // Front face
    -TABLE_TOP.W/4 +1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, 0,    // bottom-right
    -TABLE_TOP.W/4 + 1.1*DEPTH, DEPTH, 0,  // top-left
    TABLE_TOP.W/4- 1.1*DEPTH, DEPTH, 0,   // top-right
    
    // Back face
    -TABLE_TOP.W/4 + 1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, -0,    // bottom-right
    -TABLE_TOP.W/4 + 1.5*DEPTH, DEPTH, -CUSHION,    // top-left
    TABLE_TOP.W/4 - 2.5*DEPTH, DEPTH, -CUSHION,     // top-right
]);

// Define the faces (indices) of the trapezoid
const indices = new Uint32Array([
    // Front face
    0, 1, 2,   // First triangle
    1, 3, 2,   // Second triangle
    
    // Back face
    4, 6, 5,   // Third triangle
    5, 6, 7,   // Fourth triangle
    
    // Side faces
    0, 4, 1,   // Fifth triangle
    1, 4, 5,   // Sixth triangle
    1, 5, 3,   // Seventh triangle
    3, 5, 7,   // Eighth triangle
    3, 7, 2,   // Ninth triangle
    2, 7, 6,   // Tenth triangle
    2, 6, 0,   // Eleventh triangle
    0, 6, 4    // Twelfth triangle
]);

// Create the buffer geometry
const geometry = new THREE.BufferGeometry();

// Add attributes to the geometry
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3)); // 3 vertices per point
geometry.setIndex(new THREE.BufferAttribute(indices, 1)); // 1 index per point

// Create a material
const material = new THREE.MeshBasicMaterial({ map: cushionTexture, });

// Create the mesh
const trapezoidMesh = new THREE.Mesh(geometry, material);
trapezoidMesh.position.set(TABLE_TOP.W/4 + DEPTH/4,0, TABLE_TOP.H/2 + CUSHION);
//  cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 )

// Add the mesh to the scene
test.scene.add(trapezoidMesh);

const vertices2 = new Float32Array([
    // Front face
    -TABLE_TOP.W/4 +1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, 0,    // bottom-right
    -TABLE_TOP.W/4 + 1.1*DEPTH, DEPTH, 0,  // top-left
    TABLE_TOP.W/4- 1.1*DEPTH, DEPTH, 0,   // top-right
    
    // Back face
    -TABLE_TOP.W/4 + 1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, -0,    // bottom-right
    -TABLE_TOP.W/4 + 2.5*DEPTH, DEPTH, -CUSHION,    // top-left
    TABLE_TOP.W/4 - 1.5*DEPTH, DEPTH, -CUSHION,     // top-right
]);

// Define the faces (indices) of the trapezoid
const indices2 = new Uint32Array([
    // Front face
    0, 1, 2,   // First triangle
    1, 3, 2,   // Second triangle
    
    // Back face
    4, 6, 5,   // Third triangle
    5, 6, 7,   // Fourth triangle
    
    // Side faces
    0, 4, 1,   // Fifth triangle
    1, 4, 5,   // Sixth triangle
    1, 5, 3,   // Seventh triangle
    3, 5, 7,   // Eighth triangle
    3, 7, 2,   // Ninth triangle
    2, 7, 6,   // Tenth triangle
    2, 6, 0,   // Eleventh triangle
    0, 6, 4    // Twelfth triangle
]);

// Create the buffer geometry
const geometry2 = new THREE.BufferGeometry();

// Add attributes to the geometry
geometry2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3)); // 3 vertices per point
geometry2.setIndex(new THREE.BufferAttribute(indices2, 1)); // 1 index per point

// Create a material

// Create the mesh
const trapezoidMesh2 = new THREE.Mesh(geometry2, material);
trapezoidMesh2.position.set(-TABLE_TOP.W/4 - DEPTH/4,0, TABLE_TOP.H/2 + CUSHION);
//  cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 )

// Add the mesh to the scene
test.scene.add(trapezoidMesh2);


const vertices4 = new Float32Array([
    // Front face
    -TABLE_TOP.W/4 +1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, 0,    // bottom-right
    -TABLE_TOP.W/4 + 1.1*DEPTH, DEPTH, 0,  // top-left
    TABLE_TOP.W/4- 1.1*DEPTH, DEPTH, 0,   // top-right
    
    // Back face
    -TABLE_TOP.W/4 + 1.1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1.1*DEPTH, 0, -0,    // bottom-right
    -TABLE_TOP.W/4 + 2.5*DEPTH, DEPTH, -CUSHION,    // top-left
    TABLE_TOP.W/4 - 1.5*DEPTH, DEPTH, -CUSHION,     // top-right
]);

// Define the faces (indices) of the trapezoid
const indices4 = new Uint32Array([
    // Front face
    0, 1, 2,   // First triangle
    1, 3, 2,   // Second triangle
    
    // Back face
    4, 6, 5,   // Third triangle
    5, 6, 7,   // Fourth triangle
    
    // Side faces
    0, 4, 1,   // Fifth triangle
    1, 4, 5,   // Sixth triangle
    1, 5, 3,   // Seventh triangle
    3, 5, 7,   // Eighth triangle
    3, 7, 2,   // Ninth triangle
    2, 7, 6,   // Tenth triangle
    2, 6, 0,   // Eleventh triangle
    0, 6, 4    // Twelfth triangle
]);

// Create the buffer geometry
const geometry3 = new THREE.BufferGeometry();
const geometry4 = new THREE.BufferGeometry();

// Add attributes to the geometry
geometry4.setAttribute('position', new THREE.BufferAttribute(vertices4, 3)); // 3 vertices per point
geometry4.setIndex(new THREE.BufferAttribute(indices4, 1)); // 1 index per point
geometry3.setAttribute('position', new THREE.BufferAttribute(vertices, 3)); // 3 vertices per point
geometry3.setIndex(new THREE.BufferAttribute(indices, 1)); // 1 index per point


// Create a material

// Create the mesh
const trapezoidMesh3 = new THREE.Mesh(geometry3, material);
const trapezoidMesh4 = new THREE.Mesh(geometry4, material);
trapezoidMesh3.position.set(-TABLE_TOP.W/4 - DEPTH/4,0, -TABLE_TOP.H/2 - CUSHION);
trapezoidMesh4.position.set(TABLE_TOP.W/4 + DEPTH/4,0, -TABLE_TOP.H/2 - CUSHION);
//  cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 )
trapezoidMesh3.rotation.y = -Math.PI;
trapezoidMesh4.rotation.y = -Math.PI;

// Add the mesh to the scene
test.scene.add(trapezoidMesh3);
test.scene.add(trapezoidMesh4);


const verticesW = new Float32Array([
    // Front face
    -TABLE_TOP.W/4 +1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1*DEPTH, 0, 0,    // bottom-right
    -TABLE_TOP.W/4 + 1*DEPTH, DEPTH, 0,  // top-left
    TABLE_TOP.W/4- 1*DEPTH, DEPTH, 0,   // top-right
    
    // Back face
    -TABLE_TOP.W/4 + 1*DEPTH, 0, 0,   // bottom-left
    TABLE_TOP.W/4 - 1*DEPTH, 0, -0,    // bottom-right
    -TABLE_TOP.W/4 + 2.5*DEPTH, DEPTH, -CUSHION,    // top-left
    TABLE_TOP.W/4 - 2.5*DEPTH, DEPTH, -CUSHION,     // top-right
]);

// Define the faces (indices) of the trapezoid
const indicesW = new Uint32Array([
    // Front face
    0, 1, 2,   // First triangle
    1, 3, 2,   // Second triangle
    
    // Back face
    4, 6, 5,   // Third triangle
    5, 6, 7,   // Fourth triangle
    
    // Side faces
    0, 4, 1,   // Fifth triangle
    1, 4, 5,   // Sixth triangle
    1, 5, 3,   // Seventh triangle
    3, 5, 7,   // Eighth triangle
    3, 7, 2,   // Ninth triangle
    2, 7, 6,   // Tenth triangle
    2, 6, 0,   // Eleventh triangle
    0, 6, 4    // Twelfth triangle
]);

// Create the buffer geometry
const geometryW1 = new THREE.BufferGeometry();
const geometryW2 = new THREE.BufferGeometry();

// Add attributes to the geometry
geometryW1.setAttribute('position', new THREE.BufferAttribute(verticesW, 3)); // 3 vertices per point
geometryW1.setIndex(new THREE.BufferAttribute(indicesW, 1)); // 1 index per point
geometryW2.setAttribute('position', new THREE.BufferAttribute(verticesW, 3)); // 3 vertices per point
geometryW2.setIndex(new THREE.BufferAttribute(indicesW, 1)); // 1 index per point


// Create a material

// Create the mesh
const trapezoidMeshW1 = new THREE.Mesh(geometryW1, material);
const trapezoidMeshW2 = new THREE.Mesh(geometryW2, material);
trapezoidMeshW1.position.set(-TABLE_TOP.W/2 - CUSHION,0, 0);
trapezoidMeshW2.position.set(TABLE_TOP.W/2 + CUSHION,0, 0);
//  cushionTable.position.set(0,DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 )
trapezoidMeshW1.rotation.y = -Math.PI/2;
trapezoidMeshW2.rotation.y = Math.PI/2;

// Add the mesh to the scene
test.scene.add(trapezoidMeshW1);
test.scene.add(trapezoidMeshW2);


const cueBallGeometry = new THREE.SphereGeometry( CUE_BALL, 64, 32 ); 
const cueBallMaterial = new THREE.MeshBasicMaterial( { map:cueBallTexture, } ); 
const cueBall = new THREE.Mesh( cueBallGeometry, cueBallMaterial );
cueBall.position.set(2,CUE_BALL/2 + DEPTH/2,2)
test.scene.add( cueBall );

const objectGeometry = new THREE.SphereGeometry( CUE_BALL, 64, 32 ); 
const objectMaterial = new THREE.MeshStandardMaterial( { map:objectBallTexture, } ); 
const objectBall = new THREE.Mesh( objectGeometry, objectMaterial );
objectBall.position.set(4,CUE_BALL/2 + DEPTH/2,3)
test.scene.add( objectBall );


  const cornerMaterialDepth = new THREE.MeshBasicMaterial( {map:cornerTexture,} ); 

const cornerGeometryDepth = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER - DEPTH/1.5, HEIGH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerDepth = new THREE.Mesh( cornerGeometryDepth, cornerMaterialDepth ); 
  cornerDepth.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF - G,-HEIGH/2,TABLE_TOP.H / 2 +  CORNER_POCKET.HALF -G)
  test.scene.add( cornerDepth );

const cornerGeometryDepth2 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER- DEPTH/1.5, HEIGH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerDepth2 = new THREE.Mesh( cornerGeometryDepth2, cornerMaterialDepth ); 
  cornerDepth2.rotation.y = -Math.PI/2;
  cornerDepth2.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF + G,-HEIGH/2,TABLE_TOP.H / 2 + CORNER_POCKET.HALF -G)
  test.scene.add( cornerDepth2 );

  const cornerGeometryDepth3 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER- DEPTH/1.5, HEIGH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerDepth3 = new THREE.Mesh( cornerGeometryDepth3, cornerMaterialDepth ); 
  cornerDepth3.rotation.y = Math.PI/2;
  cornerDepth3.position.set(TABLE_TOP.W / 2 + CORNER_POCKET.HALF - G,-HEIGH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF + G)
  test.scene.add( cornerDepth3 );

  const cornerGeometryDepth4 = new THREE.CylinderGeometry( CORNER_POCKET.CORNER, CORNER_POCKET.CORNER- DEPTH/1.5, HEIGH, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerDepth4 = new THREE.Mesh( cornerGeometryDepth4, cornerMaterialDepth ); 
  cornerDepth4.rotation.y = -Math.PI;
  cornerDepth4.position.set(-TABLE_TOP.W / 2 - CORNER_POCKET.HALF + G,-HEIGH/2,-TABLE_TOP.H / 2 - CORNER_POCKET.HALF + G)
  test.scene.add( cornerDepth4 );


  const tableTopGeometryDepth = new THREE.BoxGeometry( TABLE_TOP.W + 2*CUSHION, 0.01, TABLE_TOP.H  + 2*CUSHION);
  const tableTopMaterialDepth = new THREE.MeshStandardMaterial( {map: cushionTexture,} );
  const tableTopDepth = new THREE.Mesh( tableTopGeometryDepth, tableTopMaterialDepth );
   tableTopDepth.position.set(0,-HEIGH,0)
  test.scene.add( tableTopDepth );



const tableBodyGeometry = new THREE.BoxGeometry(TABLE_TOP.W + 3*DEPTH + CORNER_POCKET.HALF + G, HEIGH + DEPTH/2, RAIL_TABLE ); 
const tableBodyMaterial = new THREE.MeshBasicMaterial({ map:tableSideTexture, });
const TableBody = new THREE.Mesh( tableBodyGeometry, tableBodyMaterial ); 
TableBody.position.set(0,-HEIGH/2 + DEPTH/2, TABLE_TOP.H/2 + CUSHION/2 +  RAIL_TABLE/2 + G);
TableBody.rotation.x = Math.PI/30;
test.scene.add( TableBody );

const tableBodyGeometry2 = new THREE.BoxGeometry(TABLE_TOP.W + 3*DEPTH + CORNER_POCKET.HALF + G, HEIGH + DEPTH/2, RAIL_TABLE ); 
const TableBody2 = new THREE.Mesh( tableBodyGeometry2, tableBodyMaterial ); 
TableBody2.position.set(0,-HEIGH/2 + DEPTH/2, -TABLE_TOP.H/2 - CUSHION/2 -  RAIL_TABLE/2 - G);
TableBody2.rotation.x = -Math.PI/30;
test.scene.add( TableBody2 );

const tableBodyMaterial2 = new THREE.MeshBasicMaterial({ map:tableSideTexture2, });
const tableBodyGeometry3 = new THREE.BoxGeometry(RAIL_TABLE, HEIGH + DEPTH/2, TABLE_TOP.H + 3*DEPTH + CORNER_POCKET.HALF + G ); 

const TableBody3 = new THREE.Mesh( tableBodyGeometry3, tableBodyMaterial2 ); 
TableBody3.position.set(TABLE_TOP.W/2 + CUSHION/2 +  RAIL_TABLE/2 + G,-HEIGH/2 + DEPTH/2,);

TableBody3.rotation.z = -Math.PI/30;
test.scene.add( TableBody3 );

const TableBody4 = new THREE.Mesh( tableBodyGeometry3, tableBodyMaterial2 ); 
TableBody4.position.set(-(TABLE_TOP.W/2 + CUSHION/2 +  RAIL_TABLE/2 + G),-HEIGH/2 + DEPTH/2,);

TableBody4.rotation.z = Math.PI/30;
test.scene.add( TableBody4 );


const tableBottomGeometry = new THREE.BoxGeometry(TABLE_TOP.W + 2*RAIL_TABLE, DEPTH/2, TABLE_TOP.H + RAIL_TABLE ); 
const TableBottom = new THREE.Mesh( tableBottomGeometry, cornerMaterialDepth ); 
TableBottom.position.set(0, -HEIGH, 0);

test.scene.add( TableBottom );







const cornerGeometryLeg = new THREE.CylinderGeometry( TABLE_LEG.T, TABLE_LEG.B, TABLE_LEG.H, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerLeg = new THREE.Mesh( cornerGeometryLeg, cornerMaterialDepth ); 
  cornerLeg.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION )
  test.scene.add( cornerLeg );

const cornerGeometryLeg2 = new THREE.CylinderGeometry( TABLE_LEG.T, TABLE_LEG.B, TABLE_LEG.H, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerLeg2 = new THREE.Mesh( cornerGeometryLeg2, cornerMaterialDepth ); 
  cornerLeg2.rotation.y = -Math.PI/2;
  cornerLeg2.position.set(-TABLE_TOP.W / 4 - TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION)
  test.scene.add( cornerLeg2 );

  const cornerGeometryLeg3 = new THREE.CylinderGeometry(TABLE_LEG.T, TABLE_LEG.B, TABLE_LEG.H, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerLeg3 = new THREE.Mesh( cornerGeometryLeg3, cornerMaterialDepth ); 
  cornerLeg3.rotation.y = Math.PI/2;
  cornerLeg3.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,-(TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION ))
  test.scene.add( cornerLeg3 );

  const cornerGeometryLeg4 = new THREE.CylinderGeometry( TABLE_LEG.T, TABLE_LEG.B, TABLE_LEG.H, 64, 64, false,  2 * PI, 1/2 * PI); 
  const cornerLeg4 = new THREE.Mesh( cornerGeometryLeg4, cornerMaterialDepth ); 
  cornerLeg4.rotation.y = -Math.PI;
  cornerLeg4.position.set(-TABLE_TOP.W / 4 - TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,-(TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION))
  test.scene.add( cornerLeg4 );


const cornerGeometryP1Leg = new THREE.BoxGeometry( DEPTH/2, TABLE_LEG.H + DEPTH/2,RAIL_TABLE ); 
  const cornerLegP1 = new THREE.Mesh( cornerGeometryP1Leg, cornerMaterialDepth ); 
  cornerLegP1.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2 + DEPTH/2,TABLE_TOP.H / 2 - RAIL_TABLE/2);
  cornerLegP1.rotation.x = Math.PI/35;

const cornerGeometryP2Leg = new THREE.BoxGeometry(RAIL_TABLE , TABLE_LEG.H + DEPTH/2, DEPTH/2); 

  const cornerLegP2 = new THREE.Mesh( cornerGeometryP2Leg, cornerMaterialDepth ); 
  cornerLegP2.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T + RAIL_TABLE -DEPTH/2.5 ,-HEIGH - TABLE_LEG.H/2 + DEPTH/2,TABLE_TOP.H / 2 - RAIL_TABLE*2 +  TABLE_LEG.B/2);

  // cornerLegP2.rotation.x = -Math.PI/35;
  cornerLegP2.rotation.z = -Math.PI/35;

  const MiddleGeometryP1Leg = new THREE.BoxGeometry(1.7*RAIL_TABLE , TABLE_LEG.H + DEPTH/2, 1.7*RAIL_TABLE); 

  const middelLegP1 = new THREE.Mesh( MiddleGeometryP1Leg, cornerMaterialDepth ); 
  middelLegP1.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION );

  // cornerLegP2.rotation.x = -Math.PI/35;
  middelLegP1.rotation.y = Math.PI/4;


  const middelLegP2 = new THREE.Mesh( MiddleGeometryP1Leg, cornerMaterialDepth ); 
  middelLegP2.position.set(-TABLE_TOP.W / 4 - TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION);

  // cornerLegP2.rotation.x = -Math.PI/35;
  middelLegP2.rotation.y = Math.PI/4;


  const middelLegP3 = new THREE.Mesh( MiddleGeometryP1Leg, cornerMaterialDepth ); 
  middelLegP3.position.set(TABLE_TOP.W / 4 + TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,-(TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION ));

  // cornerLegP2.rotation.x = -Math.PI/35;
  middelLegP3.rotation.y = Math.PI/4;


  const middelLegP4 = new THREE.Mesh( MiddleGeometryP1Leg, cornerMaterialDepth ); 
  middelLegP4.position.set(-TABLE_TOP.W / 4 - TABLE_LEG.T,-HEIGH - TABLE_LEG.H/2,-(TABLE_TOP.H / 2 - RAIL_TABLE -CUSHION));

  // cornerLegP2.rotation.x = -Math.PI/35;
  middelLegP4.rotation.y = Math.PI/4;



 
 

  
  
  test.scene.add( middelLegP1 );
  test.scene.add( middelLegP2 );
  test.scene.add( middelLegP3 );
  test.scene.add( middelLegP4 );
  test.scene.add( cornerLegP1 );
  test.scene.add( cornerLegP2 );


const groundGeometry = new THREE.PlaneGeometry(ROOM.W, ROOM.H, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
groundMesh.position.y = -(HEIGH+TABLE_LEG.H);

test.scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff, 0.5, 3000, 0.25, 1);
spotLight.position.set(0, 75, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
test.scene.add(spotLight);










  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;

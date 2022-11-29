import { useGLTF } from "@react-three/drei";

export default function Model() {
  const model = useGLTF("http://localhost:3000/Catering5.glb")
  // const boxRef = useRef();

  // useFrame(() => {
  //   // @ts-ignore
  //   boxRef.current.rotation.y += 0.01;
  // });
  return (
    <primitive
      object={model.scene}
      //add rotation hereÅ
      // ref={boxRef}
     
    />
  );
}

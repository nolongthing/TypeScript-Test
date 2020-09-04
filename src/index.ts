// import './Decorator';


function dispatch(){
  // try {
      return Promise.resolve( fn());
  // } catch (error) {
  //     return Promise.reject("123");
  // }
}
async function  fn(){
  await  Promise.reject("hhh");
}
dispatch().catch(reason=>{
  console.log(reason);
})
console.clear();

const actionCreator = (type,payload) =>
{
  return {
    type :type ,
    payload : payload  
  }
}

const claimHistoryReducer = (oldListOfClaims = [] , action) => {
  if(action.type == 'CREATE_CLAIM')
    {
      return [...oldListOfClaims, action.payload];
    }
  return oldListOfClaims;
}

const accountingReducer = (bagOfMoney = 100, action) => {
  console.log(action)
  if(action.type === 'CREATE_CLAIM')
    {
      return bagOfMoney - action.payload.amount;
    }
  else if(action.type ==='CREATE_POLICY'){
      return bagOfMoney + action.payload.amount  ;
    }
  return bagOfMoney;
}

const policiesReducer = (listOfPolicies = [], action)=>{
  if (action.type=='CREATE_POLICY')
    {
      return [...listOfPolicies , action.payload.name];
    }
  
  else if (action.type=='DELETE_POLICY')
    {
      return listOfPolicies.filter(name =>name!==action.payload.name)
    }
  
  return listOfPolicies;
}



const {createStore,combineReducers} = Redux;
const ourDepartments = combineReducers({
  accounting : accountingReducer,
  claimHistory : claimHistoryReducer ,
  policies : policiesReducer
});




const store = createStore(ourDepartments);


store.dispatch(actionCreator('CREATE_POLICY',{name:'Alex',amount : 20}));
store.dispatch(actionCreator('CREATE_POLICY',{name:'Alexaaaa',amount : 120}));
store.dispatch(actionCreator('CREATE_POLICY',{name:'Alex1111',amount : 200}));


console.log(store.getState());

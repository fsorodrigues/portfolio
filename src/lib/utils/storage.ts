function saveToStore(store : any, name : string, obj : { mode: string }) {
  store.setItem(name, JSON.stringify(obj)) 
}

export default { saveToStore }


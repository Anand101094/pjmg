const initState={
    projects:[
        {id:"1", title:"Go outside, Have fun", content:"You're awesome. Get out there and enjoy yourself"},
        {id:"2", title:"Collect your memories", content:"Enjoy the memories you have in your mind"},
        {id:"3", title:"Love Unconditionally", content:"Love her like she means the world to you"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT" :
            console.log("Project Created", action.project);
            return state;
        case "CREATE_PROJECT_ERROR" :
            console.log("create project error", action.err);
            return state;
        default :
            return state
    }
}

export default projectReducer
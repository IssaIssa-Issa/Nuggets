const rules = {
    visitor: {
      static: ["login:visit"]
    },
    Child: {
      static: [
        "chore:list",
        "users:getSelf",
        "child-page:visit"
      ],
    },
    Parent: {
      static: [
        "chore:list",
        "chore:create",
        "chore:edit",
        "chore:delete",
        "users:get",
        "users:getSelf",
        "home-page:visit",
        "parent-page:visit"
      ]
    }
  };
  
  export default rules;
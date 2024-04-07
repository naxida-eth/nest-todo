nestjs 可以一键生成CRUD模板
```cmd
    nest g resource users
```

```cmd
    npm install --save @nestjs/typeorm typeorm mysql2
```


```graphql
query {
  findAll {
    id
    some
    isOk
    isDelete
    updateTime
    createTime
  }
}
```

```json
{
  
}
```



```graphql
mutation CreateSome($input: CreateSomeInput!) {
  createSome(createSomeInput: $input) {
    id
    some
  }
}
```

```json
   {
     "input": {
       "some": "222222"
     }
   }
```
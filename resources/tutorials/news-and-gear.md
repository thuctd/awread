1. generate core:

   nx workspace-generator core news

2. go into core folder: awread/libs/core

3. generate gear:

   nx workspace-generator logic api news
   nx workspace-generator logic gear news
   nx workspace-generator logic facade news
   nx workspace-generator state news --entity=true

4. get connect from server to api

- graphql
- httpClient

5. get input data fill into akita

- go gear file
- pipe data into akita store
- learn observable vs variable

6. write facade for output data

- variable: news$ observable
- function: get api service

7. connect to html

- connect to core then run functions
- declare variable: news observable

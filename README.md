# ReactJS Ignite Challenge Components

Challenge proposed for Ignite on Reactjs trail, from Rocketseat. 

## Pré-requisitos

```
git clone https://github.com/AlanWehrliLC/reactJSigniteChallengeComponents.git

cd reactJSigniteChallengeComponents

yarn
```

> Já que é utilizado um `fake api`, usando o `json-server`, após instalar as dependencias, utilize 'dois' terminais, um para iniciar o `json-server` e outra para a aplicação.

```
yarn server
```
> &
```
yarn dev
```

### O que deveria ter sido edito na aplicação?

 - src/App.tsx
   - Esse componente contém toda a aplicação com exceção do componente Button que não precisava ser alterado e Icon que também não precisa de alteração.

 - src/components/Content.tsx
   - Esse componente, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação (seção contornada em vermelho):

<p align="center">
  <img alt="seção contornada em vermelho" src=".github/example01.png" width="100%">
</p>

 - src/components/SideBar.tsx
   - Esse componente, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página (seção contornada em vermelho):

<p align="center">
  <img alt="seção contornada em vermelho" src=".github/example02.png" width="100%">
</p>

 - #### src/hooks/useGenerAndMovies.tsx
   - Além de fazer todas as modificações necessárias, criei um Context, um hook, para passar informações entre componentes.
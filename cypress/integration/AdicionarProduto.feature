#language: pt
Funcionalidade: AdicionarProdutoCarrinho

    Como usuario, desejo adicionar produto no carrinho
    Para que possa finalizar minha compra

Cenario: Adicionar produto ao carrinho
  Dado que tenha acessado ecommerce
  E tenha pesquisado pelo produto Faded Short Sleeve
  E tenha clicado sobre o produto primeiro produto encontrado
  Quando acionar a opção Add to cart
  Então o produto sera adicionado ao carrinho


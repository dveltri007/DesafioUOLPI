import { Given,And, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que tenha acessado ecommerce', () => {
  cy.visit('http://automationpractice.com/index.php')
});

And('tenha pesquisado pelo produto Faded Short Sleeve', () => {
  cy.get('.container > .row > #search_block_top > #searchbox > #search_query_top').click()
  cy.get('.container > .row > #search_block_top > #searchbox > #search_query_top').type('Faded Short Sleeve')
  cy.get('.container > .row > #search_block_top > #searchbox > .btn').click()
});

And('tenha clicado sobre o produto primeiro produto encontrado', () => {
  cy.get('.product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
});

When('acionar a opção Add to cart', () => {
  cy.scrollTo(0, 500)
  cy.get('.box-info-product > .box-cart-bottom > div > #add_to_cart > .exclusive').click()
});

Then('o produto sera adicionado ao carrinho', () => {
  cy.wait(2000)
  cy.contains('Product successfully added to your shopping cart')
      .should('be.visible')
});






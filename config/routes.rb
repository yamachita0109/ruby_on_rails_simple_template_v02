Rails.application.routes.draw do
  get    '/authentication/facebook'          => 'authentication#facebook'
  get    '/authentication/paypal'          => 'authentication#paypal'
end

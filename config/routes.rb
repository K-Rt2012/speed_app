Rails.application.routes.draw do
  get 'pokemon_speed' => 'speeds#home'
  get 'api/greeting' => 'application#test'
  get 'api/characters' => 'application#message'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

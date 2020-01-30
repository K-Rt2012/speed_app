// var 変数の宣言(letと違い関数を定義することも可能)
// fanction 関数の宣言 fanction 関数名(引数)
$(document).ready(function() {
  $(".js-data-example-ajax").select2({
    ajax: {
      url:'/api/characters',
      dataType: 'json',
      delay: 50,
      data: function(params) {
        return {　q: params.term　};
      },
      processResults: function (data, params) {
        console.log(data)
        return { results: $.map(data, function(obj) {
          console.log(obj)
            return { id: obj.id, text: obj.name };
          })
        };
      }
    },
    theme: "bootstrap",
    width: "100%",
    placeholder: "ポケモン名",
  });
  // $('.js-example-basic-multiple').select2();
  // $('.js-data-example-ajax').select2({
  //   ajax: {
  //     url: "/api/characters",
  //     dataType: 'json',
  //     data: function (params) {
  //       // params.termに、選択ボックスで入力したキーワードが渡ってくる
  //       // それをqパラメータに渡す
  //       return {
  //         q: params.term, // search term
  //         page: params.page
  //       };
  //     },
      
  //     processResults: function (data, params) {
  //       // dataにレスポンスのJSONが渡ってくる
  //       // parse the results into the format expected by Select2
  //       // since we are using custom formatting functions we do not need to
  //       // alter the remote JSON data, except to indicate that infinite
  //       // scrolling can be used
  //       params.page = params.page || 1;
  
  //       return {
  //         results: data.items,
  //         pagination: {
  //           more: (params.page * 30) < data.total_count
  //         }
  //       };
  //     },
  //     cache: true
  //   },
  //   placeholder: 'Search for a repository',
  //   minimumInputLength: 1,
  //   templateResult: formatRepo,
  //   templateSelection: formatRepoSelection
  // });
  
  // function formatRepo (repo) {
  //   if (repo.loading) {
  //     console.log(repo);
  //     let characters = JSON.parse(repo);
  //     console.log(characters);
  //     return characters;
  //   };
  //   // JSON.parse(repo, (key, value) => {
  //   //   console.log(characters.name);
  //   //   if (key === 'name') return value;
  //   // });
    
  //   var $container = $(
  //     "<div class='select2-result-repository clearfix'>" +
  //       "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
  //       "<div class='select2-result-repository__meta'>" +
  //         "<div class='select2-result-repository__title'></div>" +
  //         "<div class='select2-result-repository__description'></div>" +
  //         "<div class='select2-result-repository__statistics'>" +
  //           "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> </div>" +
  //           "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> </div>" +
  //           "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> </div>" +
  //         "</div>" +
  //       "</div>" +
  //     "</div>"
  //   );
  
  //   $container.find(".select2-result-repository__title").text(repo.full_name);
  //   $container.find(".select2-result-repository__description").text(repo.description);
  //   $container.find(".select2-result-repository__forks").append(repo.forks_count + " Forks");
  //   $container.find(".select2-result-repository__stargazers").append(repo.stargazers_count + " Stars");
  //   $container.find(".select2-result-repository__watchers").append(repo.watchers_count + " Watchers");
  
  //   return $container;
  // }
  
  // function formatRepoSelection (repo) {
  //   return repo.full_name || repo.text;
  // }
});
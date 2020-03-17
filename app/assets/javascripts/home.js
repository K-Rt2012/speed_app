// var 変数の宣言(letと違い関数を定義することも可能)
// fanction 関数の宣言 fanction 関数名(引数)
// processResults オプションで API Response を受信した後の処理
// templateResult, templateSelection オプションで見た目(HTML)の設定
// ajax オプション内で設定
// url, data オプションで API Request に関する設定
let characters = [];
// var race_value = Number($("#race_value")[0].value)
// var individual_value = Number($("#iv0")[0].value)
// var effort_value = Number($("#Effort_value")[0].value)
// var correction = Number($("#nature0")[0].value)

$(document).ready(function() {
  let characterSelect = $(".js-data-example-ajax")
  characterSelect.select2({
    ajax: {
      url:'/api/characters',
      dataType: 'json',
      delay: 50,
      data: function(params) {
        return {　q: params.term　};
      },
      processResults: function (data, params) {
        console.log(data);
        console.log(params);

        characters = data.characters;
        return { results: $.map(data.characters, function(obj) {
            console.log(data.characters.name);
            return { id: obj.id, text: obj.name };
          })
        };
      }
    },
    width: "30%",
    placeholder: "ポケモン名",
  });
    var race_value = Number($("#race_value")[0].value)
    var individual_value = Number($("#iv0")[0].value)
    var effort_value = Number($("#Effort_value")[0].value)
    var correction = Number($("#nature0")[0].value)
    let speed_answer = ((race_value + individual_value /2 + effort_value /8)+5) * correction
    let speed = Math.floor(speed_answer);

  characterSelect.on("change", function (e) {
    console.log("select2:open", e.target.value);
    let id = Number(e.target.value);
    let characterId = characters.find(c => c.id === id);
    console.log(characterId);
    $('.character_race_speed').val(characterId.race_speed);
  });
  characterSelect.on("change", function (e) {
    console.log("select2:open", e.target.value);
    let id = Number(e.target.value);
    let characterId = characters.find(c => c.id === id);
    console.log(characterId);
    $('.character_race_speed').val(characterId.race_speed);
  });
  characterSelect.on("change", function (e) {
    race_value = Number($("#race_value")[0].value)
    $('#race_value').val(race_value);
    speed_answer = ((race_value + individual_value /2 + effort_value /8)+5) * correction
    speed = Math.floor(speed_answer);
    $('#speed_value').val(speed);
  });
  characterSelect.on("change", function (e) {
    effort_value = Number($("#Effort_value")[0].value)
    $('#Effort_value').val(effort_value);
    speed_answer = ((race_value + individual_value /2 + effort_value /8)+5) * correction
    speed = Math.floor(speed_answer);
    $('#speed_value').val(speed);
  });

  characterSelect.on("change", function (e) {
    individual_value = Number($("#iv0")[0].value)
    $('#iv0').val(individual_value);
    speed_answer = ((race_value + individual_value /2 + effort_value /8)+5) * correction
    speed = Math.floor(speed_answer);
    $('#speed_value').val(speed);
  });

  characterSelect.on("change", function (e) {
    speed_answer = ((race_value + individual_value /2 + effort_value /8)+5) * correction
    speed = Math.floor(speed_answer);
    $('#speed_value').val(speed);
  });
});

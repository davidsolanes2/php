/**
 * Created by david on 8/03/17.
 */

app.service('MyServ',['$resource',function($resource) {

    this.consultaPokemon = function () {
        return $resource('resp_12.php/pokem/:apodo' , null,{
                'update': {method:'PUT'}
            });
        };
}]);

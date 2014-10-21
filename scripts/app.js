'use strict';

/* App Module */

angular.module('myApp',['ui.router'])
    .factory('myPosts', [function(){
        var o={
            posts:[
                {title: 'post 1',  upvotes: 5},
                {title: 'post 2', upvotes: 2},
                {title: 'post 3', upvotes: 15},
                {title: 'post 4', upvotes: 9},
                {title: 'post 5', upvotes: 4}]
        };

        return o;
    }])
    .controller('MainCtrl',[
        '$scope',
        'myPosts',
        function($scope,myPosts){
            $scope.posts = myPosts.posts;

            $scope.addPost = function(){
                if($scope.title===""){return;}
                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: 0
                });
                $scope.title = '';
                $scope.link = '';
            };
        }]);


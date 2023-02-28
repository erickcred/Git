$(document).ready(function() {
    const endpoint = "https://api.github.com/users/erickcred";

    fetch(endpoint)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            $(".profile-name").html(data.name);
            $(".profile-avatar").attr("src", data.avatar_url);
            $(".profile-username").html(`@${data.login}`);
            $("#followers").html(data.followers);
            $("#following").html(data.following);
            $("#public_repos").html(data.public_repos);
            $(".profile-link").attr("href", data.html_url)
            console.log(data);
        });


});
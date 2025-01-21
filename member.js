function skillsMember(){
    var member = {
        name: 'John',
        age: 23,
        skills: ['JavaScript', 'PHP', 'Node.js'],
        showSkills: function(){
            this.skills.forEach(function(skill){
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
    member.showSkills();
}
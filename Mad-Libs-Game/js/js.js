
    var questions = 6;
    var questionsleft = ' [' + questions + ' questions left]';

    var noun1 = prompt('Enter a noun ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    var noun2 = prompt('Enter another noun ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    var verb1 = prompt('Enter a verb ending in -ing ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    var verb2 = prompt('Enter a descriptive sense verb (ex: eat, feel, listen, etc.) ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    var adjective1 = prompt('Enter a color adjective ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    var adjective2 = prompt('Enter another adjective ' + questionsleft);
    questions -= 1;
    questionsleft = ' [' + questions + ' questions left]';

    alert('All done. Constructing poem');

    var madLibPoem = "<p>But O " + noun1 + "! " + noun1 + "! " + noun1 + "!<br>";
    madLibPoem += "O the " + verb1 +" drops of " + adjective1 + ",<br>";
    madLibPoem += "Where on the deck my " + noun2 + " lies,<br>";
    madLibPoem += "Fallen " + adjective2 + " and dead.<br>";
    madLibPoem += "O " + noun2 + "! my " + noun2 + "! rise up and " + verb2 + " the bells;<br>";
    madLibPoem += "Rise up-for you the flag is flung-for you the bugle trills;<br>";
    madLibPoem += "For you bouquets and ribbon'd wreaths-for you the shores a-crowding;<br>"
    madLibPoem += "For you they call, the swaying mass, their eager faces turning</p>";
    document.write(madLibPoem);

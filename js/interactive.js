var state = 0;
var NAME_STATE = 0;
var userName;

function maketerminal() {
  $('#mydiv').terminal(function(command, term) {

    term.echo(returncommand(term, command));
  }, {
    prompt: 'What is your name? ',
    name: 'test',
    greetings: 'Hello, my name is Keshav Parwal! (If cursor is not blinking, please click here)\n'
  });
}

function returncommand(term, command) {
  if (state == NAME_STATE) {
    userName = command;
    var firstName = userName.split(' ')[0];
    term.set_prompt(firstName.toLowerCase() + "$ ");
    state = 1;
    return '\nHi, [[;lime;]' + firstName + ']! Enter the command "help" to see your options.\n';
  } else {
    if (command == 'help') {
      return "\nThese are the currently supported commands\n\nabout\nproject\nskill\nclear\n";
    }
    if (command.trim().split(' ')[0] == 'about') {
      return getAbout(command.trim().split(' ')[1]);
    }
    if (command.trim().split(' ')[0] == 'project') {
      var project = command.trim().split(' ')[1];
      if (project) {
        switch (project) {
          case "Shopping":
            return "\n[[;lightblue;]Cloud-based Android and iOS app that streamlines sharing and receiving shopping wishlists and sales between friends. Built with a team of five using Agile/SCRUM development methodologies.]\n"
            break;
          case "Salesforce":
            return "\n[[;lightblue;]Helped to develop an integration toolkit and installer while with Decision First Technologies. Toolkit used a middleman approach to allow Salesforce.com and SAP BusinessObjects to seamlessly interact with one another. I helped to secure the toolkit by adding a license signature and expiration feature as well as creating a server-side installer program and associated Salesforce.com app and Visualforce pages.]\n"
            break;
          case "MathShell":
            return "\n[[;lightblue;]Expression and equation evaluator for Android. It can evaluate complicated expressions, save and reference variables, and has a bevy of in-built functions useful for trigonometry, geometry, and statistics.]\n"
            break;
          case "DPU-Simulator":
            return "\n[[;lightblue;]Web-based simulator for experimenting with register and memory operations. Simple, human-friendly syntax and scripting capabilities, as well as live preview of the microcodes associated with the instructions.]\n"
            break;
          case "KeshavShell":
            return "\n[[;lightblue;]A little web console for the shell enthusiast! Learn about me, my skills, and my portfolio all without leaving the command line!]\n"
            break;
          case "SmartLibrary":
            return "\n[[;lightblue;]Java based desktop application built to help public libraries keep track of items in stock, important patrons, and items that are due. Includes item checkout feature and on-the-fly report generation.]\n"
            break;
        }
      }
      return '\nUSAGE: project [project-name]\nAvailable Projects:\n\tShopping With Friends\n\tSalesforce BusinessObjects Integration\n\tMathShell\n\tDPU-Simulator\n\tKeshavShell (this)\n\tSmartLibrary';
    }
    if (command.trim().split(' ')[0] == 'skill') {
      return getSkill(command.trim().split(' ')[1]);
    }
    return "[[;red;]\nSorry, that command wasn't recognized. Enter 'help' to see a list of valid commands]\n";
  }
}

$(function() {
  maketerminal();
});

function displayTerminal() {
  $('#terminal').slideToggle("slow");
}

function getSkill(skill) {
  if (skill) {
    switch (skill) {
      case "Java":
        return "\n[[;#CC0052;]Java is my most comfortable programming language. Beyond just the language, I have experience with JavaFX, Tomcat, Glassfish, Java EE, and Eclipse. I have written various servlet programs for use in Tomcat, as well as programs that leverage the cryptographic functions in Java.]\n"
        break;
      case "Python":
        return "\n[[;#CC0052;]Although I am newer to Python, I've worked with Python-based web frameworks like Flask as well as Jython.]\n"
        break;
      case "Web":
        return "\n[[;#CC0052;]A lot of my experience is in web technologies. I am highly adept with HTML, CSS, and JavaScript, but I also have worked with Node.js, AngularJS, and jQuery. I have also used server-side technologies like Tomcat.]\n"
        break;
      case "C":
        return "\n[[;#CC0052;]I am a proficient C programmer, with a little experience in C++. I am also familiar with x86 assembly.]\n"
        break;
      case "Android":
        return "\n[[;#CC0052;]I have extensive experience with Android, including the Google Maps API and Parse cloud storage. Many of my side projects are Android apps.]\n"
        break;
      case "Other":
        return "\n[[;#CC0052;]I am highly familiar with Linux, web servers, cryptography, advanced data structures and algorithms, and digital chip design. I speak English, Hindi, and Spanish, and I am learning Japanese.]\n"
        break;
    }
  }
  return '\nUSAGE: skill [project-name]\nAvailable Skills:\n\tJava\n\tPython\n\tWeb\n\tC\n\tAndroid\n\tOther\n';
}

function getAbout(mod) {
  switch (mod) {
    case "professional":
      return '\n[[;lime;]My name is Keshav Parwal and I am a budding developer and software engineer studying at the Georgia Institute of Technology.' +
      ' My interests include Web Development, Android Development, and Information Security and Cryptography.\n\nThere is nothing more enjoyable than making'+
      ' what people considered impossible yesterday into today\'s possibility. As such, I like to live on the cutting edge of science, technology, and' +
      ' mathematics. I am a natural problem solver, but more importantly I am an effective and creative communicator. No one person can solve any worthwhile' +
      ' problem on their own, so it is important to be able to bring in the right talent and place it in the right environment. In other words, using the right' +
      ' tool for the right job.]\n';
      break;
    case "personal":
      return '\n[[;#009900;]Beyond the realm of computer science and professional skills, my hobbies include bicycling, writing, and digital design. I am an avid gamer and photographer.\n\nI love to play Quiz Bowl, and I am a huge history buff. I love learning about ancient cultures and languages. In that vein, I also love astronomy and physics (I am signed up for the NASA newsletter) and everything in between.]';
      break;
    default:
      return '\nUSAGE: about [flag]\nFlags:\n\tprofessional\n\tpersonal';
  }
}

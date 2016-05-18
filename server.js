var express=require('express');
var app=express();
var faker=require('faker');
var lodash=require('lodash');

var generarUsuario1= function(){
	var randomId=faker.random.uuid();
	var randomName=faker.name.findName();
	var randomContent=faker.lorem.sentence();
	var randomImage=faker.image.people();
	var randomDate=faker.date.past();
	var randomAddress=faker.address.streetAddress();
	return {
		ID: randomId,
		Nombre: randomName,
		Contenido: randomContent,
		Fecha: randomDate,
		Imagen: randomImage,
		Direccion: randomAddress
	}
}

var generarUsuario2= function(){
	var randomName=faker.name.findName();
	var randomEmail=faker.internet.email();
	var randomUser=faker.internet.userName();
	var randomPassword=faker.internet.password();
	var randomImage=faker.image.people();
	return {
		Nombre: randomName,
		Email: randomEmail,
		Usuario: randomUser,
		Password: randomPassword,
		Imagen: randomImage,
	}
}

app.get('/post', function(req, res){
	var numero=lodash.random(5, 10);
	var usuarios=lodash.times(numero, generarUsuario1);
	res.json(usuarios);
})

app.get('/info', function(req, res){
	var numero=lodash.random(5,10);
	var usuarios=lodash.times(numero, generarUsuario2);
	res.json(usuarios);
})

app.listen(3000);
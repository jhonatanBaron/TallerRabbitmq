
### ⚓ Los servicios 

**analitica  hace refewrencia a "servicio analiticas"
**cliente app hace referencia a servicio cliente-x
**panel visual
logger-central

## 🛠️ Herramientas 



- 🐋 **Docker**: Para desplegar 
- 📦 **Docker Compose**: Para coordinar 

---

## 🏴‍☠️ Pasos a seguir

Primero, baja al puerto del proyecto:

```bash
cd PARCIAL2
```

Luego, ordena levantar los servicios con:

```bash
docker-compose up --build
```

** puedes añadir `-d` para mantenerlo en silencio, es decir:

```bash
docker-compose up -d --build
```

---

## 🌊 Rutas para Navegar

A                            |
|--------------------------|------------------------------------------------|----------------------------------------------|
| 🧭 **Tablero** | [localhost:8080](http://localhost:8080)        | El mando de Traefik                   |
| 📜 **analiticas**| [localhost/registro-status](http://localhost/registro-status) | Estado de las visitas |
| 🚤 **cliente 1**           | [localhost/cliente/app1](http://localhost/cliente/app1) | La primera aplicación cliente                |
| 🚤 **cliente 2**           | [localhost/cliente/app2](http://localhost/cliente/app2) | La segunda aplicación cliente                |
| 🚤 **cliente 3**           | [localhost/cliente/app3](http://localhost/cliente/app3) | La tercera aplicación cliente                |
| 🔭 **PAnel vsual** | [localhost/monitor](http://localhost/panel_visual)  |                  |

---


```
├── analitica
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── cliente-app
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── docker-compose.yml
├── images
│   └── image.png
├── logger-central
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   └── server.js
├── panel_visual
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   └── server.js
├── README.md
└── traefik.yml

```

---

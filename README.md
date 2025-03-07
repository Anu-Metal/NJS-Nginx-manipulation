# NJS Response Manipulation Example

This project demonstrates how to use NGINX JavaScript (NJS) module to manipulate API responses by modifying JSON data in real-time using a body filter.

## Overview

The setup consists of:
- A Node.js Express API server running on Ubuntu (10.1.1.5)
- An NGINX reverse proxy with NJS module running on Ubuntu (10.1.1.4)
- An NJS script that modifies API responses by adding 10 to numeric values

The NJS body filter intercepts responses from the backend API and modifies the JSON payload before sending it to the client.

## Prerequisites

- Ubuntu Server
- NGINX with NJS module installed (`ngx_http_js_module.so`)
- Node.js and npm
- Basic understanding of NGINX configuration and JavaScript


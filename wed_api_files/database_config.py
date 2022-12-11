import psycopg2
import socket

HOST = '192.168.0.103'
DBNAME = 'wedding_project'
USER = 'postgres'
PASSWORD = 'postgres'


def get_connection():
    connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST)
    return connection

FROM python:3.8.10

EXPOSE 50051

COPY . .
RUN pip install -r requirements.python.txt
RUN ls

CMD ["python", "./app.py"]

#copy and paste in neu erstellte serializers.py
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'pic', 'url', 'created_at', 'updated_at')
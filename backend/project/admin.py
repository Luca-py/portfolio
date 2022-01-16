from django.contrib import admin
from .models import Project

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'pic', 'url', 'created_at', 'updated_at')

admin.site.register(Project, ProjectAdmin)
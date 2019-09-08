from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from contacts import views

router = routers.DefaultRouter()
router.register(r'contacts', views.UserViewSet, 'contacts')
router.register(r'profile', views.UserProfileViewSet, 'profile')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

from django.db import models
from django.utils.translation import gettext_lazy as  _

# Create your models here.

# username = name of the person setting up study group
# description = description of study group
# location = location of study group
# timeBeginning = when the study group will meet
# classStudy = the class that the group is studying for
# tag = cateogrized type of meetup
# studyGroupSize = approximate size of the study group

class Meeting(models.Model):
    username = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    location = models.CharField(max_length=300)
    timeBeginning = models.CharField(max_length=5)
    classStudy = models.CharField(max_length=7)
    tag = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class GroupSize(models.TextChoices):
        SMALL = 'SM', _('Small')
        MEDIUM = 'MD', _('Medium')
        LARGE = 'LG', _('Large')

    studyGroupSize = models.CharField(
        max_length=2,
        choices=GroupSize.choices,
        default=GroupSize.MEDIUM,
    )